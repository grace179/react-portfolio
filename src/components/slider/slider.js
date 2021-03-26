import React, { useState, useEffect, useRef } from 'react';
import styles from './slider.module.css';
import Loading from '../loading/loading';
import SliderItem from '../slider_item/slider_item';

const Slider = ({projectRepository}) => {

  const [loading, setLoading] = useState(true);
  const [adminProject, setAdminProject] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  let totalNum =  Object.keys(adminProject).length;
  
  // console.log(totalNum);

  const handleClickPrev = () => {
    if(pageNum > 0){
      setPageNum(pageNum - 1);
    }else{
      setPageNum(totalNum = 1);
    }
  }

  const handleClickNext = () => {
    if(pageNum < totalNum - 1){
      setPageNum(pageNum + 1);
    }else{
      setPageNum(0);
    }
  }
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(handleClickNext, 7000);

  // setInterval(() => {
  //   handleClickNext();
  // }, 5000);

  useEffect(() => {
    projectRepository.adminProjectList((projects)=>{
      setAdminProject(projects);
      setLoading(false);
    });
  },[projectRepository]);
  // console.log(adminProject);

    return (
      <section className={styles.slider}>
      {loading ? <Loading/>:(
        <div className={styles.slideContain}>
        { Object.keys(adminProject).map((key, index) => {
            return (<SliderItem project={adminProject[key]} key={key} pageNum={pageNum} index={index}/>)
        })}
        </div>
        )
      }
        <div
          className={styles.prevBtn}
          onClick={handleClickPrev}
          ></div>
        <ul className={styles.liBtn}>
        { Object.keys(adminProject).map((key,index)=>
            <li
            className={pageNum === index ? `${styles.currentli}`:null}
            onClick={()=>setPageNum(index)}
            ></li>
        )}
        </ul>
        <div
          className={styles.nextBtn}
          onClick={handleClickNext}
          ></div>
      </section>
    );
}

export default Slider;