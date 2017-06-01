class Api::SubscriptionsController < ApplicationController
  def show
    @subscriptions = Subscription.where({subject_id: params[:id]})
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = current_user.id
    if @subscription.save!
      @subject = Subject.find(subscription_params)
      render "api/subjects/show"
    else
      render json: @score.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  def subscription_params
    params.require(:subscription).permit(:subject_id)
  end
end