'use client'
import Banner from './components/Banner'


export default function Home() {

  return (
    <Banner props={{headerText: "I am text passed as property"}}>I am child of Banner</Banner>
  );
}