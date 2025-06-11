import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";

const HeroSection = ({addProduct}) => {
  const [filter, setFilter] = useState("all");


  const cards = [
    {
      title: "Chicken Biryani",
      description:
        "Spicy basmati rice cooked with marinated chicken and traditional spices.",
      image:
        "https://imgs.search.brave.com/MbztiRJEPShD4-VQu4awsn9AQGuF-HaBlOOiTPruv-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MTUzMzc2OS9waG90/by9kZWxpY2lvdXMt/Y2hpY2tlbi1iaXJ5/YW5pLXRvcC12aWV3/LWJpcnlhbmktcmlj/ZS1kaXNoLWJlYXV0/aWZ1bC1pbmRpYW4t/cmljZS1kaXNoLWRl/bGljaW91cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bGZX/WmVCZ0ozcHBEVlhx/dHEyR0VSM3Iyc1Ey/My1nVWZRc0dBRzFq/bGVnOD0",
      price: 350,
      category: "Biryani",
      status: "available",
    },
    {
      title: "Beef Biryani",
      description:
        "Aromatic rice layered with tender beef and signature biryani spices.",
      image:
        "https://imgs.search.brave.com/y1-FWzc-FNeYGgd-896VbH7AGDaem8BWgrwanxvpCVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NzE3MjAwMi9waG90/by9pbmRpYW4tc3Bp/Y3ktbXV0dG9uLWJp/cnlhbmktd2l0aC1y/YWl0YS1hbmQtZ3Vs/YWItamFtdW4tc2Vy/dmVkLWluLWEtZGlz/aC1zaWRlLXZpZXct/b24tZ3JleS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c1ls/ZHRGMkVfY1N1WWlv/UHRjbU0xNWFyc25T/czJtSWdwdUFLVUR1/dUdvST0",
      price: 400,
      category: "Biryani",
      status: "out of stock",
    },
    {
      title: "Chicken Tikka",
      description:
        "Grilled chicken pieces marinated in yogurt and spices, served with chutney.",
      image:
        "https://imgs.search.brave.com/MTzTd3ByfPlNTFt0eQwcRy8TgHI5YF_hhAbJ7eY9o38/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/Nzg0MjM4L3Bob3Rv/L2NoaWNrZW4tdGlr/a2EtaW5kaWFuLWZv/b2QtcmVjaXBlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1t/Y3RpMm5uaVhDWmRl/REIwWmp1VlJ0ME0z/UklYaC1kTHZUUlRp/LXBXbnVnPQ",
      category: "Tikka",
      price: 300,
      status: "available",
    },
    {
      title: "Mutton Mandi",
      description:
        "Traditional Arabian rice with juicy mutton pieces and mild spices.",
      image:
        "https://imgs.search.brave.com/LXP13TFXDSyIv3dNB4jNlfSOOg7Fug5XpDDH7uB1dEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9hcmFiaWMt/bXV0dG9uLW1hbmRp/LWxlZy1yb2FzdC0y/NjBudy0yMDkxMDY3/NzMyLmpwZw",
      price: 500,
      category: "Mandi",
      status: "available",
    },
    {
      title: "Chicken Karahi",
      description:
        "Chicken cooked in a wok with tomatoes, green chilies, and garlic.",
      image:
        "https://imgs.search.brave.com/lNLf70ol5GH72strKy3fuDT57_ltC1XS_yem0usbHDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MzYwMjQwMi9waG90/by9jaGlja2VuLWth/cmFoaS1rb3JtYS1t/c2FsYS1zZXJ2ZWQt/aW4tZGlzaC1pc29s/YXRlZC1vbi10YWJs/ZS10b3Atdmlldy1v/Zi1hc2lhbi1hbmQt/aW5kaWFuLWZvb2Qu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUlyN1lKZnRodUNn/LW5WeFZTdGdTdlYy/MTdwWVNidkhWRlR3/RlhURnRmbVU9",
      category: "Karhai",
      price: 450,
      status: "available",
    },
    {
      title: "Beef Nihari",
      description: "Slow-cooked beef stew with rich spices and tender meat.",
      image:
        "https://imgs.search.brave.com/NduOH7BYSgaipaXF72ckrDZG2Xut79VjAEvRnBce2zg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NTk4NTMzNC9waG90/by9iZWVmLW5paGFy/aS1wYWtpc3Rhbmkt/Y3VycnktY3Vpc2lu/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9c3AxcGppVEla/RmNjVElNX1o3b2E5/RGpfSHIyM29hVmhZ/R01iZGFCb0xHZz0",
      price: 480,
      category: "Nihari",
      status: "out of stock",
    },
    {
      title: "Haleem",
      description:
        "A thick, savory porridge made with meat, lentils, and wheat.",
      image:
        "https://imgs.search.brave.com/1JHJ8HztGqM-92Y1xeiHj82IXv40iUPZwb0LdRrPgVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MjQ0MjU2OC9waG90/by9iZWVmLWhhbGVl/bS1vci1oYWxpbS1h/bmQtZGFsZWVtLXNl/cnZlZC1pbi1kaXNo/LWlzb2xhdGVkLW9u/LWRhcmstYmFja2dy/b3VuZC10b3Atdmll/dy1vZi1pbmRpYW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXYyRzJGTXZrYVIx/Rnd1Zm9obkNuZnhw/S0RBNTdEbGhVZFUz/T1FlaWNuRkU9",
      category: "Haleem",
      price: 320,
      status: "available",
    },
    {
      title: "Chapli Kebab",
      description:
        "Minced meat patties with spices, shallow fried for a crispy taste.",
      image:
        "https://imgs.search.brave.com/6I66QO0hpziy3rshDdLWri1QvIn0RhTs4Xte59ep3fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAx/MDQ3NjQxL3Bob3Rv/L2NoYXBsaS1rYWJh/Yi0xLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1CQU1FV3pG/NGRnY0NhMk1WbXNR/YW9zcHVvUURPVGU4/RkI0Q2JXVUhjNUw4/PQ",
      category: "Kabab",
      price: 280,
      status: "available",
    },
    {
      title: "Seekh Kebab",
      description:
        "Skewered minced meat cooked over charcoal with traditional spices.",
      image:
        "https://imgs.search.brave.com/eQRAPqwBhie8DuSCH82-eyZv6RBEAqxd_s7Fm7aOtlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgw/MTE0NDc2L3Bob3Rv/L2luZGlhbi1tdXR0/b24tc2Vla2gta2Fi/YWItc2VydmVkLXdp/dGgtZ3JlZW4tc2Fs/YWQtc2VsZWN0aXZl/LWZvY3VzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1FTlVl/azI3bjdmVHZKeDRJ/LTRCQnF1X0ZkU0N0/MlVnMkVyaUxIVmdn/aldRPQ",
      price: 300,
      category: "Kabab",
      status: "available",
    },
    {
      title: "Sindhi Biryani",
      description:
        "Spicy and tangy biryani with potatoes and marinated chicken.",
      image:
        "https://imgs.search.brave.com/inLsnvI_8t9jZgAx7a-hwUOvkEZc-9gt63t34JupyU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/NDg2NTc1L3Bob3Rv/L2RlbGhpLWJpcnlh/bmktNS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NTJ2NTlx/SktMOFhZOUV2bkdk/dGhURHBuQlBkalQ0/eHJqcFlweGhBX0pu/WT0",
      category: "Biryani",
      price: 370,
      status: "available",
    },
  ];

  let btn = {
    padding: "5px 15px",
    gap: "20px",
  };

  let filterItems = [...cards, ...addProduct];

  let filterFood = filterItems.filter((item) => {
    return filter === "all" || item.category === filter;
  });

  return (
    <div className="container">
      <div className="btnCards">
        <button style={btn} onClick={() => setFilter("all")}>
          All
        </button>
        <button style={btn} onClick={() => setFilter("Biryani")}>
          Biryani
        </button>
        <button style={btn} onClick={() => setFilter("Kabab")}>
          Kabab
        </button>
        <button style={btn} onClick={() => setFilter("Mandi")}>
          Mandi
        </button>
        <button style={btn} onClick={() => setFilter("Haleem")}>
          Haleem
        </button>
        <button style={btn} onClick={() => setFilter("Karhai")}>
          Karhai
        </button>
        <NavLink to="/addProduct">
          <button
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            Add Food Item
          </button>
        </NavLink>
      </div>

      <div className="cardContainer">
        {filterFood.map((item, indx) => {
          let { title, description, image, price, status } = item;

          return (
            <Cards
              key={indx}
              title={title}
              desc={description}
              image={image}
              price={price}
              status={status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;