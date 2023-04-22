import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--padding);
  width: 100%;
  margin-bottom: 2rem;

  grid-column: 1/3;
  grid-row: 1/2;

  gap: var(--gap);

  border-bottom: 1px solid var(--light-alt-color);
`

const WarningMessage = styled.p`
  color: var(--theme-color);
`

const InfoWrapper = styled.section`
  width: 80%;
  & p {
    margin-top:1rem;
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <InfoWrapper>
      <h1>2023 yılı Milletvekili hesaplayıcı - D'Hondt Sistemi</h1>
        <p>Programa vekil sayısını girin ve her parti için tahmini oy sayısını girin. "Hesapla" butonuna tıklayın ve D'Hondt sistemi ile hesaplanmış sonuçları görün.</p>
        <p>Yüzde değerleri girilebilir, ancak vekil sayısı tam sayı olacağı için 1 vekil sapması olabilir (Eşitlik durumunda). Kesin sonuçlar için oy sayısı veya küsüratlı yüzde değerleri kullanılmalıdır.</p>
        <WarningMessage>Bölgeyi seç butonuna basmazsanız seçili bölgeyi hesaba katmaz.</WarningMessage>
      </InfoWrapper>
    </HeaderWrapper>
  );
}

export default Header;
