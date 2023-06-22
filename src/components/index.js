import React from "react";

function Home()
{
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF08tB4M3IpW4yrliWwxENY3WZDqeEDx0eCOLI4B5x8A&usqp=CAU&ec=48665699" alt="" />
            </div>
            <h2>Home Component</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_yellow__dnv9794q7loy_large.jpg" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone 14 Plus
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;