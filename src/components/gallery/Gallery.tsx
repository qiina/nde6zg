import ImgItem from './ImgItem';

const Gallery = () => {
    const s1 = 'http://drive.google.com/uc?export=view&id=14do3HZMlM30A9SlitvL80dg49wjfzVJY';
    return (
        <div id="gallery-container">
            <ImgItem src={s1} alt={'falied to load'}/>
        </div>
    );
}
export default Gallery;