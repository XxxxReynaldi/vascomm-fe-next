import { useEffect } from 'react';
import AOS from 'aos';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeatureGame from '../components/organisms/FeatureGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

	useEffect(() => {
		document.title = `Test | Home`;
		return () => {
			document.title = `Test Stack`;
		};
	});

	return (
		<>
			<Navbar />
			<MainBanner />
			<TransactionStep />
			<FeatureGame />
			<Reached />
			<Story />
			<Footer />
		</>
	);
}
