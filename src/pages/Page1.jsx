<<<<<<< HEAD
import { useNavigate } from 'react-router'

const Page1 = () => {
    const navigate = useNavigate()
    const onclick = () => {
        // location.href = 'select.html'
        navigate("page2")
    } 

    const arr = [
     { "name":"스티븐" , "email":"jobs@shellfolder.com", "regDate":"2023-02-28"},
     { "name":"에브릴" , "email":"lavigne@shellfolder.com", "regDate":"2023-02-27"},
=======
const Page1 = () => {

    const onclick = () => {
        //location"location.href = 'Select.html';"
    } 

    const arr = [
        { "name":"스티븐" , "email":"jobs@shellfolder.com", "regDate":"2023-02-28"},
        { "name":"에브릴" , "email":"lavigne@shellfolder.com", "regDate":"2023-02-27"},
>>>>>>> 11bafcef217a9796e6cc49ebc00acce0258892ed
    ]

    const styles ={
        "cursor": "pointer"
    }

return (
    <div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 목록</h1>
	  <div className="btn-group">
	    <a href="Create.html" className="btn btn-primary">사용자 추가</a>
	  </div>
	  <table className="table table-hover mt-3">
	    <thead className="table-dark">
	      <tr>
	      	<th>이름</th>
	        <th>이메일</th>
	        <th>가입날짜</th>
	      </tr>
	    </thead>
	    <tbody>
	      {
            arr.map((v,i) =>{
                return(
                    <tr style={styles} onClick={onclick} key={i}>
<<<<<<< HEAD
	                    <td>{ v.name}</td>
	                    <td>{ v.email}</td>
	                    <td>{v.regDate}</td>
=======
	                    <td>{ v.name }</td>
	                    <td>{ v.email }</td>
	                    <td>{ v.regDate }</td>
>>>>>>> 11bafcef217a9796e6cc49ebc00acce0258892ed
	                </tr>
                )
            })
          }
	      
	    </tbody>
	  </table>
	</div>

)}

export default Page1