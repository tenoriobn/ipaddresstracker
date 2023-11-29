export interface IDadosIP {
  ip: string;
  location: {
    region: string;
    country: string;
    timezone: string;
  };
  as: {
    asn: string;
  };
  isp: string;
}