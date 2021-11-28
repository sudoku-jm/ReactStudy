import styled from 'styled-components';


//export 시켜 styled는 별도로 관리한다.
//Gallery
export const Container = styled.div`
    margin:10px auto; width:1200px;
`

//GalleryList
export const GalleryContainer = styled.div`
.my-masonry-grid {
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  margin-left: -30px; 
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; 
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { 
  background: grey;
  margin-bottom: 30px;
}

`

//GalleryItem
export const GalleryBox = styled.article`
margin:0 10px 30px 10px;padding:40px 20px;box-shadow:0 0 10px rgba(0,0,0,0.1);border-radius:5px;box-sizing:border-box;
img {width:100%;height:auto;overflow:hidden;}
h3{font-size:20px;font-weight:700;color:orange;}
ul{
    margin:10px 0;
    li{
        font-size:13px;
        span{
            display:inline-block;padding:0 5px 0 0;width:60px;color:#999;
        }
    }
}
p{
    span{
        display:inline-block;margin-right:10px;color: skyblue;font-size:12px;
    }
}
`


//GallerySearch
export const GalleyForm = styled.form`
text-align:center;padding:20px;
input{width:600px;height:50px;box-sizing:border-box;border:1px solid #e5e5e5;padding:0 20px;}
button{width:100px;height:50px;background:#333;color:#fff;vertical-align:top;border:none;cursor:pointer;}
`
