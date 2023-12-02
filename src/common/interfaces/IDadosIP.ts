export interface IDadosIP {
  ip: string;
  location: {
    region: string;
    country: string;
    timezone: string;
    lat: number;
    lng: number
  };
  as: {
    asn: string;
  };
  isp: string;
}