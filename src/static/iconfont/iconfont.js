import { injectGlobal } from "styled-components";
//将iconfont定义为全局样式
injectGlobal`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1548726237454'); /* IE9 */
  src: url('./iconfont.eot?t=1548726237454#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQsAAsAAAAACHQAAAPdAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEEINlATYCJAMUCwwABCAFhG0HSxt0B8gOJSHBoAAAoABgPPy39nrfzOxmMz/AChSi5+OjImQUkEwKslWtsFUKjalQBMLlgG12yhLXwVfJogvYvg1wrJD6iGr1o9uDY6arEsiz2RwzkjYKwFECDSwinwrkQQPkX5R/GLu8yMsEqlkdKU5yiqrAQaHPCsQFa9CAQ0KjVOSHTmgLNhbxFmx16bXyAoA33s/HL4gIB5Im0xeenmfrIe0r+rIcGWIdAl0dBHCHM4FtI2MNKMRdoeUCEkTWIKr8dzYOgKqTpK/oc+/nMS/LrVYUwYZk1fiHR1YkQbT03AFwgKKFr6jFIvPVm1MkjYEsEt/LedeS24AKs94B+E+nTJOk435hGnV3cJhU+bq7+vWuOmiCGzeqFFWEwmKhhppJMp42xFROHTILrwGu9cypCq1X1XSeFYIu8KvW7FeNB6hRP6DjLimGUtRQ77gkYscaGLJWNf64QvFA+hy2UGYz2ccik4kYb0klZq6cP1R7ZpxZJwy1EMabDhty4wZFGXBq6FCUnDUDqib0xJyWzlusOBfg02VeoMGXmr9+985WxF5Txz8Hamru4WK6cvSOHaOVaYPhl9IO2vz9a3OwS+bSP8MSjdZGnwqOMLlX22ZdpV2s2kxzXUopoczQsikWmz8ponQyDlfYHqq5diTr3E1VmJbwtDslnff3/hPQ6lOrEIi/cdu0CSZ36guZef7ly/NtF3LpMuIqL12Ch2f3U//asql3z4++xKjZg3mcIHB+MG4kyJA62IiT5KGDcZ4k4N/AIqPy8PiozgplvCoBtyDv7On/4sHY7fl35vO7gvr7+ql8tge8zI/svPRHnew/ujjHuyQb4gCerPkI4tEe5iVISGwoUoMM/AN+x2erW+7hmvTNQVXAF/nKPVjxNMQG8kuA1yjVmPu+uQ3risLXtU2Rqi2OZG1sxTSS3Fbxlh1j7g9jmwSRKXQcF0LSZwayzhyyYNeg0bMHrc4+VKtyt/eMEyCi9GPFSABhxGZIhryHbMRFZMHeg8aUd9AaCQSqs/A8sGchWDRToDUSrce0fTFWxzUxpl5C/fwK2iA3aIQ436OStCCyfixcHZaO59JNtDDEErGXIUKSGIwRuEYsB1xHNzRwmFHg6midpK6VJGMCjjNFH6TWcY2AOiagaUhoehitvjAsHU4TxmktQTPfX4FmIGugIVTUlNlJNIGIHRwTTi2sATJX0tSo5lKGi3oxiCCRMHgaQ8BphMmBJlqDEeFgjMXj6tB0JGq1HUJGCXDUjGkqUU8va7zHfVDpL2oiRY4STbTKvZFtUqZr7EROFmXO6SRGdNLV0rp6tgkAAAAA') format('woff2'),
  url('./iconfont.woff?t=1548726237454') format('woff'),
  url('./iconfont.ttf?t=1548726237454') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1548726237454#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
