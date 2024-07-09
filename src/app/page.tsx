

import styles from "./page.module.css";
import { getAllArticles } from './(server)/api';
import AppLink from './shared/components/app-link';
import ArticlePreview from './ArticlePreview';

const PAGE_SIZE = 5;

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {
  const allArticles = await getAllArticles();
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const paginatedArticles = allArticles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const nextPage = {search: new URLSearchParams({ page: (page+1).toString()}).toString()}

  return (
    <main className={styles.main}>
      <h1>Articles, page - {page}</h1>
      <ul>
        {paginatedArticles.map((article) => (
          <li key={article.name}>
           {/* <AppLink href={`/articles/${article.name}`}>{article.name} </AppLink> */}
            <ArticlePreview name={article.name} text={article.header}/>
           </li>
        ))}
      </ul>

      <AppLink 
        href={nextPage}>
        Next
      </AppLink>
    </main>
  );
}

