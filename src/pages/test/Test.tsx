// const BASE = 'http://localhost:4000'

// type Review = {
//   id: string
//   title: string
//   likeCount: number
// }

export default function Test() {
  // const [reviewList, setReviewList] = useState<Review[]>([])

  // const getList = async () => {
  //   try {
  //     const {data} = await axios.get(BASE + 'review')

  //     setReviewList(data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   getList()
  // }, [])
  // return (
  //   <div>
  //     {reviewList.map(review => (
  //       <div
  //         key={review.id}
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //         }}
  //       >
  //         <div>제목 : {review.title}</div>
  //         <div>좋아요 : {review.likeCount}</div>
  //       </div>
  //     ))}
  //   </div>
  // )
  return <div style={{color: 'black'}}>테스트페이지입니다.</div>
}
