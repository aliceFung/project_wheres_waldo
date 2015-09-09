class TagsController < ApplicationController

  def index

  end

  def create
    @tag = Tag.new(params_list)
    if Character.check_position(@tag) && @tag.save
      respond_to do |format|
        format.js
      end
    end
  end

  def show
    @tag=Tag.find(params[:id])
    respond_to do |format|
      format.js
    end
  end

  def destroy

  end

  private

  def params_list
    params.require(:tag).permit(:tag_x, :tag_y, :character_id, :id)
  end

end
