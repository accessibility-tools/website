import React, { useContext } from 'react';
import { createAPIClientService, IAPIClientService } from './apiClientService';


//
// Services
export interface IServices {
  apiClient: IAPIClientService;
}

export function createServices(): IServices {
  const services = {
    apiClient: createAPIClientService('/api'),
  };

  return services;
}

export const ServicesContext = React.createContext<IServices>(null as never);
export const Services = ServicesContext.Consumer;

export const useServices = () => useContext(ServicesContext);
