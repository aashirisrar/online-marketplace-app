"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { SkeletonCard } from "@/components/skeleton-card";
import AdPage from "@/components/ad-page";

export default function UserProfilePage() {
  const [ads, setAds] = useState({});
  const [user, setUser] = useState({});
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUserPosts() {
    try {
      const response = await axios.post("/api/ads/getad", {
        adId: params.adid,
      });
      setAds(response.data.ads);
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching ads", error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    fetchUserPosts();
  }, []);

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Ad Details</h1>
      </div>
      <div>
        <AdPage user={user} ads={ads} />
      </div>
      {/* <div
        className="flex justify-between gap-4 rounded-lg shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
      </div> */}
    </>
  );
}
