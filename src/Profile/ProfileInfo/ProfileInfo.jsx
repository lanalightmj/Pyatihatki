import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return  <div>
				<div>
        			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCgLLNlJhqRdJaWjeu-TimO3TBOxFyuq8jPvedOb_nnv-aHoF&s' />
      			</div>
      			<div className={s.discriptionBlock}>
        			ava + description
      			</div>
      		</div>
}

export default ProfileInfo;