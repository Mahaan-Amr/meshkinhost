"use client";

import Link from "next/link";
import React from "react";

function getName(item: any) {
  return (
    item.title_en ||
    item.name_en ||
    item.name ||
    item.personName ||
    item.question_en ||
    "Untitled"
  );
}

export function AdminList({
  entityKey,
  items,
  deleteAction
}: {
  entityKey: string;
  items: any[];
  deleteAction: (formData: FormData) => Promise<void>;
}) {
  const [query, setQuery] = React.useState("");
  const filtered = items.filter((item) => {
    const name = getName(item);
    return name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="admin-card">
      <div className="flex items-center justify-between">
        <input
          className="input max-w-xs"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link href={`/admin/${entityKey}/new`} className="button-primary">
          New item
        </Link>
      </div>
      <div className="mt-6 grid gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="glass-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">{getName(item)}</p>
                <p className="text-xs text-slate-400">ID: {item.id}</p>
              </div>
              <div className="flex items-center gap-2">
                  <span className="glass-pill px-2 py-1 text-xs text-slate-300">
                    {item.isActive ? "Active" : "Hidden"}
                  </span>
                  <span className="glass-pill px-2 py-1 text-xs text-slate-300">
                    Order {item.sortOrder ?? 0}
                  </span>
                <Link href={`/admin/${entityKey}/${item.id}`} className="button-ghost">
                  Edit
                </Link>
                <form action={deleteAction}>
                  <input type="hidden" name="id" value={item.id} />
                  <button type="submit" className="button-ghost text-red-300">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
