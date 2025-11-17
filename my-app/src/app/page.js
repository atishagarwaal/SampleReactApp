'use client'
import Banner from './components/Banner'
import HouseList from './components/HouseList'


export default function Home() {

  return (
    <>
      <Banner props={{headerText: "I am text passed as property"}}>I am child of Banner</Banner>
      <HouseList />
    </>
  );
}