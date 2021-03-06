import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const HistoryTutoIndex = ({history}) => {
  
  const handleGoBack = () => {
    history.goBack();
  }

  const handleGoHome = () => {
    history.push('/');
  }

  useEffect(() => {
    const unblock = history.block('정말 떠나실건가요?');
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </>
  )
}

export default withRouter(HistoryTutoIndex);
