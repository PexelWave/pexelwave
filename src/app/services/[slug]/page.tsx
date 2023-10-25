import React from "react";
import { getService } from "../../../../sanity/lib/utils";
import { ServicesHeader } from "../page";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";

type QuotationProps = {
  params: {
    slug: string;
  };
};

const QuotationPage = async ({ params }: QuotationProps) => {
  const service: Service = await getService(params.slug);
  return (
    <main className="container text-light-foreground">
      <ServicesHeader />
      <h2 className="capitalize">
        Get a quote for our {service.title} Service
      </h2>

      <ServiceQuoteForm service={service.title}/>
    </main>
  );
};

export default QuotationPage;
