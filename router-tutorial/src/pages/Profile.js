import { useParams } from 'react-router-dom';

const data = {
    velopert: {
        name: '김민중',
        description: '리엑트를 좋아하는 개발자'
    },
    junho: {
        name: '권준호',
        description: '리엑트를 배우는 개발자'
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;