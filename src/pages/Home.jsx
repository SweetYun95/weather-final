import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Button, Input } from '../styles/styledComponents'
import './css/commit.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
   const [q, setQ] = useState('')
   const navigate = useNavigate()

   const handleInputChange = (e) => {
      setQ(e.target.value)
   }

   const handleSearch = (e) => {
      e.preventDefault() // 기본 sumbit 버튼의 성질 방지
      // navigate(이동할 경로)
      navigate(`/today?q=${q.trim()}`) // 검색어를 query 파라미터로 전달
   }
   return (
      <>
         <Nav />
         <div className="background">
            <form className="search_form" onSubmit={handleSearch}>
               <Input $height="40px" $fontSize="1.1rem" value={q} onChange={handleInputChange} placeholder="도시를 입력하세요" />
               <Button $width="100px" type="submit">
                  검색
               </Button>
            </form>
         </div>
         <Footer />
      </>
   )
}

export default Home
