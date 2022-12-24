import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment } from 'react';

// ? styled Component 쓸 경우 예시
const FontExample = styled.div`
  font-family: var(--font-galmuri);
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle /> 
      <div className="App">
        <FontExample><h1>1번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1></FontExample>
        <h1 className='font2'>2번: 커비의 당근밭  <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font3'>3번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font4'>4번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font5'>5번: 커비의 당근밭  <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font6'>6번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font7'>7번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font8'>8번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font9'>9번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font10'>10번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font11'>11번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font12'>12번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>
        <h1 className='font13'>13번: 커비의 당근밭 <span>/-?!~"" 메시지를 확인해보세요.</span> 1234567890 abcdefg HIJKLMNOP</h1>

        <p>margin-right</p>
        <div className='flex'>
          <div className='box c1'></div>
          <div className='box c2 gap-large'></div>
          <div className='box c3'></div>
          <div className='box c4 gap-big'></div>
          <div className='box c5'></div>
          <div className='box c6 gap-md'></div>
          <div className='box c7'></div>
          <div className='box c8 gap-sm'></div>
          <div className='box c9'></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
