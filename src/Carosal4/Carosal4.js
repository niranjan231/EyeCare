import "./Carosal4.css";
import "../Responsive.css"






const Carosal4=()=>{
    return (
        <div className="carosal4-1">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="carosal4-img" src="https://static1.lenskart.com/media/desktop/img/Mar24/SheildShades/SheildShadesWebBanner.jpg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="carosal4-img" src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="carosal4-img" src="https://static1.lenskart.com/media/desktop/img/2024/apr/JJlive/Desktop.gif" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Carosal4;