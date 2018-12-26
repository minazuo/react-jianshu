import { injectGlobal } from "styled-components";
//将iconfont定义为全局样式
injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1539956817533'); /* IE9*/
  src: url('./iconfont.eot?t=1539956817533#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVwAAsAAAAAB+AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gEgoY21hcAAAAYAAAABdAAABnLOVGyhnbHlmAAAB4AAAAYsAAAGgK6y9iGhlYWQAAANsAAAALwAAADYS/0adaGhlYQAAA5wAAAAcAAAAJAfeA4VobXR4AAADuAAAAA4AAAAQEAAAAGxvY2EAAAPIAAAACgAAAAoBGgCMbWF4cAAAA9QAAAAeAAAAIAESADxuYW1lAAAD9AAAAUUAAAJtPlT+fXBvc3QAAAU8AAAAMwAAAERjPHYheJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByecT0zY27438AQw9zA0AAUZgTJAQDh+QwjeJztkLENwCAMBM9AIoTSskXKiIFSMTlrEGOnyBB56yz7Zbl4YAOicioJpCMs3eqK+ZFifqLpnrUCjDLqaHN+J5PYRdYp+AfZ+XVYv94trtQcy7I65jcHeQAmRRJ+AAAAeJw9zk1LG1EYxfHn3DtvxDiJJpNJ6mQ0uc6MKSVzmUwmRWyioCAU6i62BBQK7cKuYrtqKdJVX75ANwPtupvQb5AuulZcuejCleCXGA1U3B5+cP6kEN3c8Ckn0qlAqxQSNUTQ0AU6Je4HQtO5mnSiOkRXaKLpd+MBYtHUbRNWudKJkidg09e72cXOKxRebr9RNabqR7iQ/beP0dhq944ONtfDw7X6ygNPnp9zyloYFH1Ryv6ozru/YSJbQzP/1HuuOjXLiTyXiNis6ZL/5C5VKCDyQvTRayMwobuwo6Rnu0hiT2u2WdxnkcvKJvj3CVptKGdpeqoop+nOB/nbsIvZr/WT46GUw+OT8b6U+8UJ5Pvt9Ez5D8OHEwML9ufqPRjPON01fOIv+EcyyScaAANsQAS+ZhUAWyswzQ9R8nuzvc8qy3ChZz/Aa118Beuy7Ooyb/0znMhgNZbHkhrPrQRri1+8ijU/xvTRCGwPwEjJqt/KuZTpdcdA3i7jOjdarM5puWf23uz3Fu+QVN8AeJxjYGRgYABi9Z4/v+L5bb4ycLMwgMD1D4yBCPp/IwsDcy2Qy8HABBIFAD80CpoAeJxjYGRgYG7438AQw8IAAkCSkQEVsAAARwoCbXicY2FgYGBBwgAAsAARAAAAAAAAAEoAjADQAAB4nGNgZGBgYGEwAGIQYAJiLiBkYPgP5jMAAA3CAU8AAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYHJMZGtOL+0uDSfJzM5P083OSM1OTszj4EBAG7SCDIA') format('woff'),
  url('./iconfont.ttf?t=1539956817533') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1539956817533#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`