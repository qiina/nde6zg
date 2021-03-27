import ImgItem from './ImgItem';

const Gallery = () => {
    const s1 = 'https://res.cloudinary.com/dsn0yuwkp/image/upload/v1616857083/samples/cloudinary-group.jpg';
    return (
        <div id="gallery-container">
            <ImgItem src={s1} alt={'falied to load'}/>
        </div>
    );
}
export default Gallery;