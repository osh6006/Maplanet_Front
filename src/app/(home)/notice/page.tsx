interface NoticeProps {}

const Notice = ( props : NoticeProps ) => {
  return (
    <div className='flex flex-col items-center justify-between '>
      <div>공지사항 Page</div>
      <div>Deploy Test!!</div>
    </div>
  )
}

export default Notice;