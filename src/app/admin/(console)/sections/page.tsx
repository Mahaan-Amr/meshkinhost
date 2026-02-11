import { prisma } from "@/lib/prisma";
import { homeSectionKeys } from "@/lib/content";
import { updateSectionOrder } from "@/lib/section-actions";

export default async function AdminSectionsPage() {
  const stored = await prisma.pageSectionOrder.findMany({ where: { pageSlug: "home" } });
  const orderMap = new Map(stored.map((item) => [item.sectionKey, item]));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Section Order</h1>
        <p className="text-sm text-slate-400">Control visibility and order of homepage sections.</p>
      </div>
      <form action={updateSectionOrder} className="admin-card space-y-4">
        {homeSectionKeys.map((key, index) => {
          const item = orderMap.get(key);
          return (
            <div key={key} className="flex flex-wrap items-center gap-4 border-b border-slate-800 pb-4">
              <div className="w-40 text-sm text-slate-300">{key}</div>
              <label className="flex items-center gap-2 text-xs text-slate-400">
                <input
                  type="checkbox"
                  name={`${key}_active`}
                  defaultChecked={item?.isActive ?? true}
                />
                Active
              </label>
              <label className="text-xs text-slate-400">
                Order
                <input
                  type="number"
                  name={`${key}_sort`}
                  defaultValue={item?.sortOrder ?? index}
                  className="input ml-2 w-24"
                />
              </label>
            </div>
          );
        })}
        <button className="button-primary" type="submit">
          Save changes
        </button>
      </form>
    </div>
  );
}