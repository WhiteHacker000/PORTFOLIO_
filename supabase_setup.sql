-- 1. Create the projects table if it doesn't exist
create table if not exists public.projects (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    title text not null,
    description text,
    image_url text,
    github_link text,
    hosted_link text,
    tags text[],
    is_featured boolean default false
);

-- 2. Enable Row Level Security (RLS)
alter table public.projects enable row level security;

-- 3. Create a policy to allow anyone to read projects
create policy "Allow public read-only access"
on public.projects for select
using (true);

-- 4. Create a policy to allow anyone (anon) to insert projects 
-- IMPORTANT: In a real production app, you should restrict this to authenticated users.
-- But for this portfolio setup, we'll allow public inserts so you can add projects easily.
create policy "Allow public insert access"
on public.projects for insert
with check (true);

-- 5. Create a policy to allow anyone to update projects
create policy "Allow public update access"
on public.projects for update
using (true);

-- 6. Create a policy to allow anyone to delete projects
create policy "Allow public delete access"
on public.projects for delete
using (true);
