
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to HopeBridge</h1>
        <p className="text-lg mb-8">
          A global platform connecting kind hearts with those in need. Help the poor across the world with transparency and love.
        </p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700">Donate Now</Button>
      </section>

      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Meet People Who Need Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Amina from Kenya</h3>
              <p className="mt-2 text-sm text-gray-600">
                Amina is a single mother of 3 struggling to pay for her children's education. $100 can cover 6 months of tuition.
              </p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Help Amina</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Ravi from India</h3>
              <p className="mt-2 text-sm text-gray-600">
                Ravi lost his job during the pandemic. A small donation can help him restart his tailoring shop.
              </p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Help Ravi</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
