"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import UserProfileComponent from "@/components/user-profile";
import { SkeletonCard } from "@/components/skeleton-card";
import AdsComponentUserPage from "@/components/ads-component-user-page";

export default function UserProfilePage() {
  const params = useParams();
  const [user, setUser] = useState({});
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUser() {
    try {
      const response = await axios.post("/api/profile/getprofile");
      setUser(response.data.user);
      setAds(response.data.ads);
    } catch (error) {
      console.error("Error fetching ads", error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    fetchUser();
  }, []);

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <>
      {ads ?
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">User Details</h1>
          </div>
          <div className="mt-2">
            <UserProfileComponent user={user} />
          </div>
          <div
            className="flex justify-between gap-4 rounded-lg shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            {/* <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div> */}
            <div className="grid max-sm:mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-3 mt-[5px] gap-2">
              {ads?.map((ad: any) => (
                <AdsComponentUserPage key={ad.adId} {...ad} />
              ))}
            </div>
          </div>
        </div> :
        <div>Not logged In</div>}

    </>
  );
}
