import './userSumary.css';

export default function UserSumary({ data, index }) {
    try {
        return (
            <div className={`user-sumary ${index === 0 ? "user-sumary-active" : ""}`}>
                <img src={data.uri} alt="user avt" />
                <h3>{data.username}</h3>
            </div>
        );
    } catch (error) {
        return <h1>An error occur</h1>
    }
}