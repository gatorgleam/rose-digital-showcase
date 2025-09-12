import { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import { WORK_ITEMS, WORK_FOLDERS, type WorkFolder } from '@/data/work';

const MyWork = () => {
  const [active, setActive] = useState<WorkFolder | 'All'>('All');
  const [items, setItems] = useState(WORK_ITEMS);
  const [folders, setFolders] = useState(WORK_FOLDERS as readonly string[]);
  const categories = useMemo(() => ['All', ...folders] as const, [folders]);
  const label = (f: string) => f.charAt(0).toUpperCase() + f.slice(1);
  const visible = useMemo(() => (active === 'All' ? items : items.filter(i => i.category === active)), [active, items]);

  useEffect(() => {
    // Try to load a generated manifest to include all files placed in /public/work
    fetch('/work/manifest.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((m) => {
        if (!m || !Array.isArray(m.items)) return;
        setItems((prev) => {
          // Merge static WORK_ITEMS with manifest items, de-duped by src
          const map = new Map(prev.map((p) => [p.src, p]));
          for (const it of m.items) {
            if (!map.has(it.src)) map.set(it.src, it);
          }
          return Array.from(map.values());
        });
        if (Array.isArray(m.folders) && m.folders.length) setFolders(m.folders);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="my-work" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-4">My Work</h2>
          <p className="text-portfolio-muted text-lg">Selected websites, flyers, graphics, and social content.</p>
        </div>

        <Tabs value={active} onValueChange={(v) => setActive(v as any)} className="w-full">
          <TabsList className="bg-white/80 backdrop-blur border border-portfolio-primary/10 rounded-full p-1">
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat} className="rounded-full px-4 py-1.5 data-[state=active]:bg-white data-[state=active]:text-portfolio-primary">
                {cat === 'All' ? 'All' : label(cat)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={active} className="mt-8">
            {visible.length === 0 ? (
              <div className="text-center text-portfolio-muted">No items in this category yet.</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map(item => (
                <Card key={item.id} className="overflow-hidden rounded-3xl border border-portfolio-primary/10 bg-white">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full text-left">
                        <div className="aspect-[4/3] bg-white overflow-hidden">
                          <img
                            src={encodeURI(item.thumb ?? item.src)}
                            alt={item.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-5xl p-0 bg-white">
                      <div className="bg-white p-0 m-0">
                        <img src={encodeURI(item.src)} alt={item.title} className="w-full h-auto object-contain" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
              ))}
            </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MyWork;
