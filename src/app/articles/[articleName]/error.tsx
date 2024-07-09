'use client';

import { ERRORS } from '@/app/errors';

export default function ArticlePageError({ error }: {error: Error}) {
	if (error.message === ERRORS.NOT_FOUND) {
		return (
			<div>
				<h1>Sorry, article was not found</h1>
			</div>
		);
	}
	else {
		return (
			<div>
				<h1>Something wet wrong with article</h1>
			</div>
		);
	}
}