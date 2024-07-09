import Image from 'next/image';
import img from './test.jpg'
import styles from './about.module.css';

export default function AboutPage() {
	return (

		<article className={styles.root}>
			<h1>About</h1>
			<Image alt='test image' src={img} loading='eager' width={500} />
			<div>

					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
					condimentum, erat sed ornare ultricies, orci odio sagittis libero, nec
					ultricies elit justo id justo. Integer nec libero ut lectus ultrices
					ultricies. Donec nec libero nec nunc ultrices ultricies. Nullam
					condimentum, erat sed ornare ultricies, orci odio sagittis libero, nec
					ultricies elit justo id justo. Integer nec libero ut lectus ultrices
					ultricies. Donec nec libero nec nunc ultrices ultricies.

			</div>
		</article>


	);
}