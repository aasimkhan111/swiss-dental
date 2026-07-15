import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey || !placeId) {
    // Return mock data if credentials are not configured
    return NextResponse.json([
      {
        id: "mock1",
        author_name: "Sarah A.",
        rating: 5,
        text: "Exceptional service! The staff is incredibly professional and the clinic is spotless. Best dental experience in Kuwait.",
        relative_time_description: "2 weeks ago",
        profile_photo_url: ""
      },
      {
        id: "mock2",
        author_name: "Mohammed K.",
        rating: 5,
        text: "Got my veneers done here. The results exceeded my expectations. Dr. Ahmed is a true artist.",
        relative_time_description: "1 month ago",
        profile_photo_url: ""
      },
      {
        id: "mock3",
        author_name: "Fatima R.",
        rating: 5,
        text: "Painless root canal! I was terrified but they made me feel so comfortable. Highly recommended.",
        relative_time_description: "2 months ago",
        profile_photo_url: ""
      }
    ]);
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=en`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    
    if (data.result && data.result.reviews) {
      // Filter out reviews without text and sort by rating
      const validReviews = data.result.reviews
        .filter((r: any) => r.text && r.rating >= 4)
        .slice(0, 3);
        
      return NextResponse.json(validReviews);
    }
    
    return NextResponse.json([]);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
