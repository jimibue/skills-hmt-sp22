class Api::GradesController < ApplicationController
    
    def all_and_then_some
        render json: Grade.all_and_then_some
    end

    def index
        render json: Grade.all
    end

end
