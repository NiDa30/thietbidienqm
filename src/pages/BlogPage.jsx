import { Link } from "react-router-dom";
import { useScrollAnimationChildren } from "../hooks/useScrollAnimation";
import "./BlogPage.css";

// Import blog images
import BlogAnNinh from "../assets/blog/blog_ an ninh.jpg";
import BlogGiaiPhap from "../assets/blog/blog_ giải pháp.webp";
import BlogSoSanhDen from "../assets/blog/blog_ so sánh đèn.webp";
import BlogTinNong from "../assets/blog/blog_ tin nóng.jpg";
import BlogToiUu from "../assets/blog/blog_ tối ưu.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Các giải pháp đèn LED cho môi trường sống trong lành hơn",
    excerpt:
      "Các giải pháp đèn LED này đã được khoa học chứng minh rằng ánh sáng LED có tác động tích cực đến việc phát triển môi trường sống lành mạnh hơn đ...",
    image: BlogGiaiPhap,
    overlay: "Các giải pháp đèn LED cho môi trường sống của bạn trong lành hơn",
  },
  {
    id: 2,
    title: "Hiệu quả của đèn LED phụ thuộc vào những yếu tố nào?",
    excerpt:
      "Hiệu quả của đèn LED phụ thuộc vào nhiều yếu tố như nhiệt độ màu càng cao thì hiệu suất càng lớn và kết xuất màu càng cao thì hiệu quả của đèn L...",
    image: BlogSoSanhDen,
    overlay: "Hiệu quả của đèn LED phụ thuộc vào những yếu tố nào?",
  },
  {
    id: 3,
    title: "Cách chọn lắp đặt đèn LED ổn định",
    excerpt:
      "Cách lắp đặt đèn LED rất quan trọng là bởi vì đèn LED đang ngày càng được phổ biến lắp đặt thay thế cho các nguồn ánh sáng huỳnh quang và halog...",
    image: BlogToiUu,
    overlay: "Cách chọn lắp đặt đèn LED ổn định",
  },
  {
    id: 4,
    title: "Điều chỉnh độ sáng cạnh trước và cạnh sau của đèn LED",
    excerpt:
      "Điều chỉnh độ sáng đèn LED là một chức năng làm mờ ánh sáng quan trọng đối với nhiều người trong phòng khách và phía trên bàn ăn, và hay tro...",
    image: BlogAnNinh,
    overlay: "Điều chỉnh độ sáng cạnh trước và cạnh sau của đèn LED",
  },
  {
    id: 5,
    title: "Đèn LED bị nhấp nháy là vì sao?",
    excerpt:
      "Đèn LED bị nhấp nháy là do một số công ty sử dụng tụ điện chất lượng thấp trong đèn LED, một trong các vấn đề chính khiến cho nhiều chủ nhà lo ng...",
    image: BlogTinNong,
    overlay: "Nhấp nháy trong đèn LED",
  },
  {
    id: 6,
    title: "Đèn LED downlight là gì? Lý do sử dụng đèn LED downlight",
    excerpt:
      "Đèn LED downlight thực chất là đèn chiếu điểm được lắp chìm vào trần nhà, mang lại ánh sáng định hướng, có thể điều chỉnh độ sáng một cách li...",
    image: BlogGiaiPhap,
  },
  {
    id: 7,
    title: "Nên thay thế bóng đèn truyền thống bằng bóng đèn LED",
    excerpt:
      "Bóng đèn LED là một giải pháp thay thế hiệu quả năng lượng, tuổi thọ cao, thân thiện với môi trường so với các loại bóng đèn chiếu sáng truyền thố...",
    image: BlogSoSanhDen,
  },
  {
    id: 8,
    title: "Đèn led là gì - Những lợi ích của đèn Led",
    excerpt:
      "Đèn LED là 1 thiết bị chiếu sáng hiệu quả nhất hiện nay, nó sử dụng điện năng ít hơn tới 90% so với đèn sợi đốt và ít hơn 60% so với đèn huỳnh quang.",
    image: BlogAnNinh,
  },
];

const BlogPage = () => {
  const gridRef = useScrollAnimationChildren({ threshold: 0.1 });

  return (
    <div className="blog-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <span className="separator">/</span>
            </li>
            <li className="active">Blog</li>
          </ul>
        </div>
      </div>

      <div className="container">
        {/* Header styling as seen in screenshot */}
        <div className="blog-header-wrapper">
          <div className="blog-header-slanted">
            <h2>BLOG</h2>
          </div>
          <div className="blog-header-line"></div>
        </div>

        {/* Blog Post Grid */}
        <div className="blog-grid" ref={gridRef}>
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card scroll-animate">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                {post.overlay && (
                  <div className="blog-card-overlay">{post.overlay}</div>
                )}
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-action">
                  <Link to="#" className="btn-read-more">
                    Xem thêm <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
