import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

interface MembershipCostModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
  onFAQClick: () => void;
}

export default function MembershipCostModal({
  isOpen,
  onOpenChange,
  onContinue,
  onFAQClick,
}: MembershipCostModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center justify-center mb-2">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">Membership Costs</DialogTitle>
          <DialogDescription className="text-center">
            Please review the following costs associated with club membership
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Annual Dues Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="font-semibold text-foreground">Annual Dues</span>
              <span className="font-bold text-lg text-foreground">$216</span>
            </div>
            <div className="pl-4 space-y-2 text-sm">
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="pl-2">• Benning Bass Club</span>
                <span className="font-medium">$156</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="pl-2">• B.A.S.S. National Dues</span>
                <span className="font-medium">$30</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="pl-2">• GA B.A.S.S. Nation</span>
                <span className="font-medium">$30</span>
              </div>
            </div>
          </div>

          {/* Club Shirt */}
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="font-semibold text-foreground">Club Shirt</span>
            <span className="font-bold text-lg text-foreground">$100-150</span>
          </div>

          {/* Monthly Tournament */}
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="font-semibold text-foreground">Monthly Tournament</span>
            <span className="font-bold text-lg text-foreground">$25</span>
          </div>

          {/* Big Fish Pot (Optional) */}
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="font-semibold text-foreground">Big Fish Pot <span className="text-sm text-muted-foreground">(optional)</span></span>
            <span className="font-bold text-lg text-foreground">+$3</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Button 
            onClick={onContinue} 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Continue to Membership Form
          </Button>
          
          <button
            onClick={onFAQClick}
            className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
          >
            How do tournaments work?
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
