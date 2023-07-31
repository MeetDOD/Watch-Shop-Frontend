import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div>
<footer class=" text-center">
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-3">
            <Link style={{textDecoration: 'none'}} to='/'><a style={{textDecoration: 'none'}} class="text-muted mx-4">Home</a></Link>
            <Link style={{textDecoration: 'none'}} to='/all'><a style={{textDecoration: 'none'}} class="text-muted mx-4">Shop</a></Link>
            </p>
          </div>
        </div>
  <div class="text-center mb-4">
			<h4><a class="text-muted mx-2" href='https://github.com/MeetDOD'><GitHubIcon/></a>MeetDodiya, 007</h4>
	</div>
  <a href="#home" class="scroll-top ">
    <i><ArrowUpwardIcon/></i>
	</a>
</footer>
    </div>
  )
}

export default Footer
