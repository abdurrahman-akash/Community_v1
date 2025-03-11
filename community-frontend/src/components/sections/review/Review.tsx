"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useState } from "react";

const reviews = [
    {
      id: 1,
      content: "We have unparalleled experience applying analytics to tackle some of the most complex cyber problems governments. Customers saves.",
      author: {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        initials: "SR",
        name: "Sarah Robinson",
        role: "Product Manager"
      },
      rating: 5
    },
    {
      id: 2,
      content: "The platform has transformed how we handle our business operations. The automation features are particularly impressive.",
      author: {
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
        initials: "JD",
        name: "John Doe",
        role: "CTO"
      },
      rating: 5
    }
  ];

function ReviewSection() {
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const previousReview = () => {
      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
      <section className="py-24 bg-gradient-to-b from-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-50/50 px-4 py-1.5 text-sm font-medium text-emerald-800 border border-emerald-100">
              <Users className="w-4 h-4" />
              <span>2,500+ Happy Customers</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
              What Our Clients Say About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their business operations with our innovative solutions.
            </p>
          </div>
  
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-[2.5rem] transform rotate-1"></div>
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[2.5rem] transform -rotate-1"></div>
            
            <div className="relative bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-emerald-100/20 border border-emerald-100">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/30 px-4 py-1.5 text-sm font-medium text-emerald-800">
                    Client Testimonial
                  </div>
  
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
                      alt="Google"
                      className="h-5 w-auto ml-2"
                    />
                  </div>
                </div>
  
                <blockquote className="text-2xl font-medium leading-relaxed text-gray-900">
                  {reviews[currentReview].content}
                </blockquote>
  
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-white ring-2 ring-emerald-50">
                      <AvatarImage src={reviews[currentReview].author.image} alt="Reviewer" />
                      <AvatarFallback>{reviews[currentReview].author.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{reviews[currentReview].author.name}</div>
                      <div className="text-sm text-gray-500">{reviews[currentReview].author.role}</div>
                    </div>
                  </div>
  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 border-emerald-100 hover:bg-emerald-50 transition-colors"
                      onClick={previousReview}
                    >
                      <ChevronLeft className="h-5 w-5 text-emerald-800" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 border-emerald-100 hover:bg-emerald-50 transition-colors"
                      onClick={nextReview}
                    >
                      <ChevronRight className="h-5 w-5 text-emerald-800" />
                    </Button>
                  </div>
                </div>
  
                <div className="absolute -bottom-4 right-8 flex items-center gap-3 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-lg">
                  <div className="flex -space-x-2">
                    {reviews.map((review) => (
                      <Avatar
                        key={review.id}
                        className="border-2 border-white"
                      >
                        <AvatarImage src={review.author.image} alt="Reviewer" />
                        <AvatarFallback>{review.author.initials}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="pl-2">
                    <span className="font-semibold">2.5k</span>
                    <span className="text-gray-600 ml-1">Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ReviewSection;