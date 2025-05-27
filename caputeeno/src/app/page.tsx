"use client"

import { ProductsList } from '@/components/ProductsList';
import { FilterBar } from "@/components/FilterBar";
import styled from 'styled-components';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: 968px) {
  padding: 34px 160px;
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
  );
}
