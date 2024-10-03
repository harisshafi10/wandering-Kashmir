import Button from "./ui/Button";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg')] bg-cover bg-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Welcome to Wandering Kashmir
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              Your one-stop shop for outdoor adventures in Kashmir. Buy or rent the best gear for your next expedition.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-green-600 text-white hover:bg-green-700">Shop Now</Button>
            <Button variant="outline" className="bg-blue-500 text-green-600 hover:bg-blue-700">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
