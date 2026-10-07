import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { formatPrice, products } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((item) => item.id === id);
  const [reviews, setReviews] = useState(() => product?.reviews ?? [
    {
      name: "Jose Sygma.",
      rating: product?.rating ?? 5,
      comment: "Solid build and a clear, dependable sound. It has earned a place in my setup.",
    },
  ]);
  const [reviewerName, setReviewerName] = useState("");
  const [reviewRating, setReviewRating] = useState("5");
  const [reviewComment, setReviewComment] = useState("");

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-950">Product not found</h1>
        <Link to="/dashboard" className="mt-4 inline-block font-medium text-orange-600 hover:text-orange-800">Back to catalog</Link>
      </div>
    );
  }

  function handleReviewSubmit(event) {
    event.preventDefault();
    setReviews((currentReviews) => [
      {
        name: reviewerName.trim(),
        rating: Number(reviewRating),
        comment: reviewComment.trim(),
      },
      ...currentReviews,
    ]);
    setReviewerName("");
    setReviewRating("5");
    setReviewComment("");
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 border border-slate-200 bg-white p-5 sm:p-8 md:grid-cols-2">
        <img src={product.image} alt={product.name} className="aspect-[4/3] w-full rounded object-cover" />
        <div className="flex flex-col items-start justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm" aria-label={`${product.rating} out of 5 stars`}>
            <span className="text-orange-500">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</span>
            <span className="text-slate-500">{product.rating}.0 / 5</span>
          </div>
          <p className="mt-4 text-lg font-semibold text-slate-800">{formatPrice(product.price)}</p>
          <p className="mt-4 leading-7 text-slate-600">{product.description}</p>
          <button type="button" onClick={() => addItem(product.id)} className="mt-7 rounded bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">Add to Cart</button>
          <Link to="/dashboard" className="mt-4 text-sm font-medium text-orange-600 hover:text-orange-800">Back to catalog</Link>
        </div>
      </div>

      <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="border border-slate-200 bg-white p-5 sm:p-7">
          <div className="flex items-end justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">Community notes</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">What players say</h2>
            </div>
            <span className="text-sm text-slate-500">{reviews.length} review{reviews.length === 1 ? "" : "s"}</span>
          </div>
          <div className="divide-y divide-slate-200">
            {reviews.map((review, index) => (
              <article key={`${review.name}-${index}`} className="py-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">{review.name}</h3>
                  <span className="text-sm text-orange-500" aria-label={`${review.rating} out of 5 stars`}>
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{review.comment}</p>
              </article>
            ))}
          </div>
        </div>

        <form onSubmit={handleReviewSubmit} className="h-fit border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">Leave a review</p>
          <h2 className="mt-1 text-xl font-bold">Share your take</h2>
          <label className="mt-5 block text-sm text-slate-300">Your name
            <input value={reviewerName} onChange={(event) => setReviewerName(event.target.value)} required className="mt-1.5 w-full rounded border border-slate-700 bg-slate-900 px-3 py-2.5 text-white outline-none focus:border-orange-400" />
          </label>
          <label className="mt-4 block text-sm text-slate-300">Rating
            <select value={reviewRating} onChange={(event) => setReviewRating(event.target.value)} className="mt-1.5 w-full rounded border border-slate-700 bg-slate-900 px-3 py-2.5 text-white outline-none focus:border-orange-400">
              {[5, 4, 3, 2, 1].map((rating) => <option key={rating} value={rating}>{rating} stars</option>)}
            </select>
          </label>
          <label className="mt-4 block text-sm text-slate-300">Your review
            <textarea value={reviewComment} onChange={(event) => setReviewComment(event.target.value)} required rows="4" className="mt-1.5 w-full resize-y rounded border border-slate-700 bg-slate-900 px-3 py-2.5 text-white outline-none focus:border-orange-400" />
          </label>
          <button type="submit" className="mt-5 w-full rounded bg-orange-500 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-orange-400">Post review</button>
        </form>
      </section>
    </div>
  );
}
