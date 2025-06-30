import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context'

const Pages = ({setStartIndex, setEndIndex}) => {
 const { pageNumbering, numberOfPages} = useContext(GlobalContext);
 const [ activePage, setActivePage ] = useState(0);
 const [ disableNext, setDisableNext ] = useState(false)
 const [ disablePrevious, setDisablePrevious ] = useState(false);

 function handlePageToDisplay(number){
    setStartIndex(number * 10);
    setEndIndex(number * 10 + 10);
    setActivePage(number)
 }


function handlePrevious(){
  if (activePage > 0) {
    const newPage = activePage - 1;
    setActivePage(newPage);
    handlePageToDisplay(newPage);
    setDisableNext(false);
    setDisablePrevious(newPage === 0);
  } else {
    setDisablePrevious(true);
  }
}


function handleNext(){
  if (activePage < numberOfPages - 1) {
    const newPage = activePage + 1;
    setActivePage(newPage);
    handlePageToDisplay(newPage);
    setDisablePrevious(false);
    setDisableNext(newPage === numberOfPages - 1);
  } else {
    setDisableNext(true);
  }
}

  return (
    <div className="d-flex gap-2 justify-content-center py-2 pageContainer">
         <button disabled={disablePrevious} onClick={handlePrevious} className="bg-dark border border-0 p-2" style={{color:"orange"}}>Prev</button>
        {
        (pageNumbering && pageNumbering.length > 0) && (() => {
          const windowSize = 5;
          const totalPages = pageNumbering.length;
          const halfWindow = Math.floor(windowSize / 2);
          let start = Math.max(0, activePage - halfWindow);
          let end = Math.min(totalPages, start + windowSize);
          if (end - start < windowSize) {
            start = Math.max(0, end - windowSize);
          }
          const visiblePages = pageNumbering.slice(start, end);
          return visiblePages.map((_, idx) => {
            const pageNum = start + idx;
            return (
              <div
                key={pageNum}
                className={activePage === pageNum ? "activePage" : "InActivePage"}
                onClick={() => handlePageToDisplay(pageNum)}
              >
                <p>{pageNum + 1}</p>
              </div>
            );
          });
        })()
        }
        <button disabled={disableNext} onClick={handleNext} className="bg-dark border border-0 p-2" style={{color:"orange"}}>Next</button>
    </div>
  )
}

export default Pages