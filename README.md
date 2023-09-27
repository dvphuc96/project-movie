dấu - trước tên class
mt-[100px]: dynamic class động
mt-[calc(100px-10px)]


## Install Package
1. TailwindCSS

2. React-router-dom

<!-- Redux -->
3. Redux toolkit (@reduxjs/toolkit)
4. React-redux (react-redux)

<!-- antd -->
5. antd (andesign)

<!-- Styled-component -->
6. styled-components
7. @types/styled-components
extension: vscode-styled-components

8. Axios

9. classnames

10. qs

<!-- Form -->
11. react-hook-form
12. zod
13. @resolverhook
14. react-toastify

15. @types/node (phục vụ import)

16. sass
<!-- Carousel -->
17. swiper yarn add swiper

<!-- react-query -->
18: yarn add react-query

// muốn sử dụng alias thì trong mỗi thư mục phải tạo 1 file index.ts
như trong folder components thì phải có index.ts
rồi trong components có thư mục layouts thì trog layout cũng phải có index.ts

ant 5 sẽ conflix với tailwill
hướng giải quyết: lên doc antd
https://ant.design/docs/react/compatible-style
sau đó vào main.tsx
import { StyleProvider } from '@ant-design/cssinjs';
sau đó thêm cái này vô
<StyleProvider hashPriority="high">
<App />
</StyleProvider>