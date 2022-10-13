import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function FileData() {
  const [file, setFile] = useState(null);	//파일	
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const handleChangeFile = (event) => {
    console.log(event.target.files)
    setFile(event.target.files);
    setImgBase64([]);
    
    for(var i=0;i<event.target.files.length;i++){
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행.
          const base64 = reader.result;
          if (base64) {
          // 문자 형태로 저장
          var base64Sub = base64.toString()
          // 배열 state 업데이트
          setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
          }
        }
      }
    }

  }

  function Send(){
    const fd = new FormData();
    Object.values(file).forEach((file) => fd.append("file", file));

   
    axios.post('/test/AxiosFileTest.do', fd, {
      headers: {
        "Content-Type": `multipart/form-data; `,
      },
      baseURL: 'http://localhost:8080'
    })
    .then((response) => {
      
    })
    .catch((error) => {
      // 예외 처리
    })
  
  }
    return (
        <div>
            FileData
            <div>
                fileData1:  <input type="file" id="file" onChange={handleChangeFile} multiple="multiple"></input>
            </div>
            <div>
              <h3>이미지 미리보기 영역</h3>
              {imgBase64.map((item) => {return <img src={item} style={{maxHeight:"300px",maxWidth:"300px"}}></img>})}
            </div>
            
            <div>
                <button onClick={()=> Send()}>Send</button>
            </div>
        </div>
    );
  }
export default FileData;  