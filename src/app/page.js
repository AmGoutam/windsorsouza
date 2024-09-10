import Announcement from '@/components/Announcement'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MainSction from '@/components/MainSction'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <Banner imageSrc="https://cdn.pixabay.com/photo/2018/03/10/18/03/laptop-3214756_1280.png" />
      <MainSction />
      <Announcement />
      <Contact />
      <Footer />
    </>
  )
}

export default page
