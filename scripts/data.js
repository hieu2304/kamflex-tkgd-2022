var reviews = [
  {
    id: 1,
    user_id: 1,
    name: 'Nguyễn Tuấn Gia',
    star: 4,
    totalLike: 10,
    totalDislike: 20,
    date: 'Ngày 21 tháng 12 năm 2021, lúc 23:23',
    content:
      'Phim khá hay tui lúc đầu hơi khó hiểu nhưng cố gắng gắn kết câu chuyện thì không hiểu thật.',
  },
  {
    id: 2,
    user_id: 1,
    name: 'Nguyễn Tú',
    star: 4,
    totalLike: 10,
    totalDislike: 20,
    date: 'Ngày 21 tháng 12 năm 2021, lúc 23:23',
    content:
      'Phim khá hay tui lúc đầu hơi khó hiểu nhưng cố gắng gắn kết câu chuyện thì không hiểu thật.',
  },
  {
    id: 3,
    user_id: 1,
    name: 'Nguyễn Thị Huy',
    star: 4,
    totalLike: 10,
    totalDislike: 20,
    date: 'Ngày 21 tháng 12 năm 2021, lúc 23:23',
    content:
      'Phim khá hay tui lúc đầu hơi khó hiểu nhưng cố gắng gắn kết câu chuyện thì không hiểu thật.',
  },
  {
    id: 4,
    user_id: 1,
    name: 'Phạm Thị Mỹ Vương',
    star: 4,
    totalLike: 10,
    totalDislike: 20,
    date: 'Ngày 21 tháng 12 năm 2021, lúc 23:23',
    content:
      'Trong một thế giới của hai thực tại-cuộc sống hàng ngày và những gì ẩn chứa đằng sau nó-Thomas Anderson sẽ phải lựa chọn đi theo con thỏ trắng một lần nữa. Sự lựa chọn, trong khi chỉ là ảo ảnh, vẫn là cách duy nhất để vào hoặc ra khỏi Ma trận, mạnh hơn, an toàn hơn, và nguy hiểm hơn bao giờ hết. The Matrix Resurrections sẽ chứng kiến ​​Keanu Reeves và Carrie-Anne Moss trở lại trong vai Neo  The Matrix Resurrections sẽ chứng kiến ​​Keanu Reeves và Carrie-Anne Moss trở lại trong vai Neo',
  },
];

var movieDetails = {
  id: 1,
  title: 'The matrix resurrection',
  runtime: 120,
  genres: ['Hành động', 'Viễn tưởng', 'Phiêu Lưu', 'Khoa Học'],
  status: 'Đã phát hành',
  releasedAt: 2021,
  languages: ['Tiếng Anh'],
  totalScore: 8.5,
  totalReview: 1500,
  poster: '/assets/images/film-image.png',
  mod: {
    acting: 1,
    content: 2,
    frame: 3,
    sound: 4,
    effects: 5,
    total: 4,
    review: `”Trong một thế giới của hai thực tại-cuộc sống hàng ngày và những gì ẩn chứa đằng sau nó-Thomas Anderson sẽ phải lựa chọn đi theo con thỏ trắng một lần nữa. Sự lựa chọn, trong khi chỉ là ảo ảnh, vẫn là cách duy nhất để vào hoặc ra khỏi Ma trận, mạnh hơn, an toàn hơn, và nguy hiểm hơn bao giờ hết.” <br/><br/>
        The Matrix Resurrections sẽ chứng kiến ​​Keanu Reeves và Carrie-Anne Moss trở lại trong vai Neo và Trinity-Neo đang sống một cuộc sống dường như bình thường ở San Francisco với vai Thomas Anderson. Anh ta đang được bác sĩ trị liệu kê cho những viên thuốc màu xanh lam và dường như không nhận ra Trinity khi họ va vào nhau. Jada Pinkett-Smith cũng sẽ trở lại với vai Niobe, trong khi Lambert Wilson sẽ đóng lại vai The Merovingian và Daniel Bernhardt trở lại với vai Đặc vụ Johnson. Lana Wachowski, người đồng đạo diễn bộ ba Ma trận gốc với chị gái Lilly, trở lại với tư cách đạo diễn, cũng như đồng sáng tác và đồng sản xuất bộ phim (mặc dù lần này Lilly không tham gia). Trong khi đó, những sự bổ sung mới cho dàn diễn viên của nhượng quyền thương mại bao gồm Yahya Abdul-Mateen II trong vai Morpheus, Jessica Henwick, Neil Patrick Harris và Priyanka Chopra.`,
  },
  content: `”Trong một thế giới của hai thực tại-cuộc sống hàng ngày và những gì ẩn chứa đằng sau nó-Thomas Anderson sẽ phải lựa chọn đi theo con thỏ trắng một lần nữa. Sự lựa chọn, trong khi chỉ là ảo ảnh, vẫn là cách duy nhất để vào hoặc ra khỏi Ma trận, mạnh hơn, an toàn hơn, và nguy hiểm hơn bao giờ hết.”<br/><br/>
    The Matrix Resurrections sẽ chứng kiến ​​Keanu Reeves và Carrie-Anne Moss trở lại trong vai Neo và Trinity-Neo đang sống một cuộc sống dường như bình thường ở San Francisco với vai Thomas Anderson. Anh ta đang được bác sĩ trị liệu kê cho những viên thuốc màu xanh lam và dường như không nhận ra Trinity khi họ va vào nhau. Jada Pinkett-Smith cũng sẽ trở lại với vai Niobe, trong khi Lambert Wilson sẽ đóng lại vai The Merovingian và Daniel Bernhardt trở lại với vai Đặc vụ Johnson. Lana Wachowski, người đồng đạo diễn bộ ba Ma trận gốc với chị gái Lilly, trở lại với tư cách đạo diễn, cũng như đồng sáng tác và đồng sản xuất bộ phim (mặc dù lần này Lilly không tham gia). Trong khi đó, những sự bổ sung mới cho dàn diễn viên của nhượng quyền thương mại bao gồm Yahya Abdul-Mateen II trong vai Morpheus, Jessica Henwick, Neil Patrick Harris và Priyanka Chopra.`,
  actors: [
    {
      name: 'Keanu Reeves',
      position: 'Neo',
      image: '/assets/images/actors/actor-1.jpg',
    },
    {
      name: 'Carrie-Anne Moss',
      position: 'Trinity',
      image: '/assets/images/actors/actor-2.jpg',
    },
    {
      name: 'Priyanka Chopra',
      position: 'Sati',
      image: '/assets/images/actors/actor-3.jpg',
    },
    {
      name: 'Jessica Henwick',
      position: 'Bugs',
      image: '/assets/images/actors/actor-4.jpg',
    },
    {
      name: 'Yahya Abdul-Mateen II',
      position: 'Morpheus',
      image: '/assets/images/actors/actor-5.jpg',
    },
    {
      name: 'Jonathan Groff',
      position: 'Agent Smith',
      image: '/assets/images/actors/actor-6.jpg',
    },
    {
      name: 'Daniel Bernhardt',
      position: 'Agent John',
      image: '/assets/images/actors/actor-7.jpg',
    },
  ],
  videos: [
    {
      poster: '/assets/images/videos/video-1.jpg',
      link: '/',
    },
    {
      poster: '/assets/images/videos/video-2.jpg',
      link: '/',
    },
    {
      poster: '/assets/images/videos/video-3.jpg',
      link: '/',
    },
    {
      poster: '/assets/images/videos/video-2.jpg',
      link: '/',
    },
  ],
};
